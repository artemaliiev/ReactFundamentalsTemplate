// import React from 'react';

// import { Input } from '../../common/Input/Input';

// import styles from './styles.module.css';

// export const CourseForm = ({authorsList, createCourse, createAuthor}) => {
//     const TITLE_LABEL = 'Title';
//     const DURATION_LABEL = 'Duration';
//     const INPUT_PLACEHOLDER = 'Input text';

// 	//write your code here
//     const handleSubmit = () => {
//         console.log(1);
//     };

//     const renderDuration = timeValue => {
//         if (timeValue) {

//         }

//         return `<b>00:00</b> hours`;
//     }

// 	return (
//         <>
//             <h1>Course edit/create page</h1>
//             <h3>Main Info</h3>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     {/*// reuse Input component for title field with data-testid="titleInput"*/}

//                     {/*// reuse Button component for 'Save course' button with data-testid="createCourseButton"*/}
//                     <Input labelText={TITLE_LABEL} placeholderText={INPUT_PLACEHOLDER} data-testid="titleInput" />
//                 </div>

//                 <label>
//                     Description
//                     <textarea data-testid="descriptionTextArea" />
//                 </label>

//                 <h3>Duration</h3>

//                 <div>
//                     <Input
//                         labelText={DURATION_LABEL}
//                         placeholderText={INPUT_PLACEHOLDER}
//                         onChange={renderDuration}
//                         data-testid="titleInput"
//                     />
//                     {renderDuration(timeValue)}
//                 </div>

//                 <div className={styles.infoWrapper}>
//                     <div>
//                         {/*// use CreateAuthor component*/}

//                         {/*// reuse Input component with data-testid='durationInput' for duration field*/}

//                         <p>Duration: </p>
//                     </div>

//                     <div className={styles.authorsContainer}>
//                         <strong>Authors</strong>

//                         {/* use 'map' to display all available autors. Reuse 'AuthorItem' component for each author */}

//                         <strong>Course authors</strong>

//                         {/* use 'map' to display course's autors */}
//                         {/* <p data-testid="selectedAuthor"}>{author.name}</p> */}

//                         <p className={styles.notification}>List is empty</p> {/* display this paragraph if there are no authors in the course */}
//                     </div>
//                 </div>
//             </form>
//         </>
// 	);
// };
