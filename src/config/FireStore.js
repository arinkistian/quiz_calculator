//At the top
import { getFirestore } from 'firebase/firestore'
import fire from './Fire'

//Below the import code
const db = getFirestore(fire)
export default db