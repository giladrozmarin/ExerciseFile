


const initialValues = {

     certification : {
    exerciseName: '',
    //exerciseBy: '',  autofill current user from session
    exerciseOOB: '',
    exercisePOD: '',
    exerciseType: '', // options should be pull from db
    exerciseLive: '',
    fieldApprove: '', // options should be pull from db
    fileApprove: '', // options should be pull from db
    artilleryApprove: '', // options should be pull from db
    exerciseManager: '',
    trainerOfficerApprove: '', // options should be pull from db
    cerRes: '',
    fieldApproveOptions: []
},
  soForm : {
      checking :''
  }
}


export default initialValues;
export const {certification, soForm} = initialValues;