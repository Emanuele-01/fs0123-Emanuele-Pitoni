import { Component } from "react";

let password = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzJkOWY4MWI0MjAwMTM5YjI3ZWUiLCJpYXQiOjE2ODA1MjY0MzcsImV4cCI6MTY4MTczNjAzN30.IJDuLhmf5TyXjOfw0m64NQ4hb9Q1bkiqO-h5lsMwPxY'

class CommentArea extends Component {
    state = {
        comment: []
    }

    RichiestaCommenti = async () => {
        try {
            let response = fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.id, {
                headers: {
                    Authorization: password
                }
            })
            if (response.ok) {
                const data = await response.json();
                this.setState({ comment: data });
            } else {
                console.log("error");
            }
        } catch (error) {

        }
    }
    render() {
        return (
            <>
                
            </>
        )
    }
}

export default CommentArea;