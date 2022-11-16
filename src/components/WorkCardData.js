import orgimg from "../assets/orgchart-img.JPG";
import quizimg from "../assets/quiz-img.JPG";
import twitterimg from "../assets/twitter-img.JPG";

const projectCardData = [

    {
        imgsrc: twitterimg,
        title: "Twitter Clone",
        text: "Collaborative work using the Spring Java framework to create a RESTful Web Service which replicated basic twitter functionality via CRUD operations on a PostgreSQL database.",
        view: "https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-10-team-3"
    },
    {
        imgsrc: quizimg,
        title: "Quiz API",
        text: "Created an API for a provided Quiz skeleton, adding backend functionality for performing CRUD operations that allow users to create, modify, and retrieve quizzes.",
        view: "https://github.com/fasttrackd-student-work/spring-assignment-quiz-api-JLynnCode"
    },
    {
        imgsrc: orgimg,
        title: "Employee Org Chart",
        text: "Java application that has multiple methods of sorting/retrieving a list of Employees and Managers as a demonstrative understanding of abstraction & inheritance.",
        view: "https://github.com/fasttrackd-student-work/java-assignment-collections-JLynnCode"
    }
]

export default projectCardData;