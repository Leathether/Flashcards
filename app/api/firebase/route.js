import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import config from "../../../firebase.json"

const app = initializeApp(config)