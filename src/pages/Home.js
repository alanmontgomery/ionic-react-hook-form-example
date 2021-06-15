import { IonButton, IonCardSubtitle, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useForm } from 'react-hook-form';

import { alertCircleOutline } from "ionicons/icons";

const Home = () => {

	const { register, handleSubmit, formState: { errors }, trigger } = useForm({
		
		mode: "onBlur",
		reValidateMode: "onBlur"
	});

	const fields = [

		{
			label: "Not Required",
			required: false,
			requiredOptions: {},
			props: {
				
				name: "test1",
				type: "text",
				placeholder: "Enter some text"
			}
		},
		{
			label: "Username",
			required: true,
			requiredOptions: {

				maxLength: 10
			},
			props: {
				
				name: "username",
				type: "text",
				placeholder: "Enter a username"
			}
		},

		{
			label: "Age",
			required: true,
			requiredOptions: {

				min: 1,
				max: 99
			},
			props: {
				
				name: "age",
				type: "number",
				inputmode: "numeric",
				placeholder: "Enter your age"
			}
		}
	];
	
	const onSubmit = (data) => {
		
		console.log(data);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>React Hook Form</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">React Hook Form</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonCardSubtitle className="ion-text-center ion-margin">An example using React Hook Form</IonCardSubtitle>

				<form onSubmit={ handleSubmit(onSubmit) }>

					{ fields.map((field, index) => {

						const { label, required, requiredOptions, props } = field;

						return (
							<IonItem key={ `form_field_${ index }` } lines="full">

								<>
									<IonLabel position="fixed">{ label }</IonLabel>
									<IonInput { ...props } { ...register(props.name, { required, ...requiredOptions }) } onIonChange={ e => { errors[props.name] && trigger(props.name) }} />
								</>
								{ required && errors[props.name] && <IonIcon icon={ alertCircleOutline } color="danger" /> }
							</IonItem>
						);
					})}

					<IonButton type="submit" className="ion-margin-top" expand="full">Submit</IonButton>
				</form>
			</IonContent>
		</IonPage>
	);
};

export default Home;