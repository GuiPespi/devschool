import styled from 'styled-components'  

const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;

.absolute {
    color: white;
    background-color: #DB21BD;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: .7em;
}

img {
    cursor: pointer;
}

.new-student-box {
    display: flex;
    flex-direction: column;

    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 2em;   
}

.bar-new-student {
    border: 3px solid #986CDF;
    border-radius: .5em;
    margin-right: .4em;
    background-color: #986CDF;
}

.text-new-student {
    display: flex;
    flex-direction: row;

    font-size: 32px;
}

.text-new-student div {
    font-weight: bolder;
}

.input-new-student {
    display: flex;
    flex-direction: row;
    padding-top: 2.4em;
}

.input-left {
    display: flex;
    flex-direction: column;
    margin-right: 3em;
}

.box-input {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.name-student {
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    padding-left: 1em;
    font-weight: 800;
}

.number-student {
    font-size: 18px;
    color: #615858;
    width: 5.5em;
    font-weight: 800;
}

.input-right {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
}

.course-student {
    font-size: 18px;
    color: #615858;
    margin-right: 1em;
    font-weight: 800;
}

.class-student {
    font-size: 18px;
    color: #615858;
    margin-right: 0.8em;
    font-weight: 800;
}

input {
    width: 209px;
    height: 36px;

    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: .5em;
}

.input {
    margin-top: .5em;
    margin-bottom: .5em;
}

button {
        cursor: pointer;
    }

.button-create {
    align-self: flex-end;
    justify-self: flex-end;
    padding-bottom: 1.5em;
}

.button-create button {
    width: 106px;
    height: 36px;

    background: #E911C6;
    border-radius: 44px;
    border: none;
    color: white;
    font-size: 14px;
    margin-left: 2em;
    font-weight: bold;
}

.button-create button:hover {
    background-color: #aa3997;
    transition: 2s;
}

.student-registered-box {
    display: flex;
    flex-direction: column;

    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 2em;
    margin-top: 2em;
    
}

.row-bar {
    display: flex;
    flex-direction: row;
}

.registered-students {
    display: flex;
    flex-direction: row;
    font-weight: bolder;
    font-size: 32px;
    padding-left: .3em;
}

table {
    margin-top: 2em;
}

.table-user {
    border-collapse: collapse;
}

thead {
    background-color: #986CDF;  
}

th {
    height: 61.93px;
    text-align: left;
    padding: 1em;
    color: #ffff;
    font-weight: 800;
}

.a {
    width: .1em;
}

.a > button {
    visibility: hidden;
}

tr:hover {
    .a > button {
    visibility: visible;
}    
}

tbody {
    background-color: #F5F5F5;
}

.int {
    background-color: #fff;
}

td {
    text-align: left;
    height:  61.93px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}

td button {
    border-radius: 50%;
    background-color: #565656;
    border: none;
    width: 31px;
    height: 31px;
}

.user-image {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 50%;
}

.user-image img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
    height: 57px;
}
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
`

export { Container, Conteudo }
