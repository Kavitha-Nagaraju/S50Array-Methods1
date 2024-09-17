class TenthResult{
    static passMarks=35;
    constructor(){
        this.telMarks=35;
        this.engMarks=78;
        this.hinMarks=90;
        this.mathMarks=89;
        this.sciMarks=78;
        this.socMarks=78;

    }
    calculateResult=()=>{
        if(this.telMarks>=TenthResult.passMarks && this.engMarks>=TenthResult.passMarks && this.hinMarks>=TenthResult.passMarks && this.mathMarks>=TenthResult.passMarks && this.sciMarks>=TenthResult.passMarks && this.socMarks>=TenthResult.passMarks)
          {
            console.log("Student Passed in Tenth")
          }
          else{
            console.log("student fialed in tenth");
          }
        }

}export default TenthResult