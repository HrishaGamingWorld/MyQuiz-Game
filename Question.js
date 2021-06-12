class Question{

    constructor(){
        this.title = createTitle (MyQuizGame);
        this.question = createQuestion (q);
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("Question:- Who was the first richest person in the year 2000?");
        this.question.position(150,80);
        this.option1.html("1. Elon Musk");
        this.option1.position(150,100);
        this.option2.html("2. Bill Gates");
        this.option2.position(150,120);
        this.option3.html("3. Warren Buffett");
        this.option3.postion(150,140);

        this.input1.position(150,230);
    }

}