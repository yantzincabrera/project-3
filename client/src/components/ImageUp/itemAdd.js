I don't get why you do var upload_file = this.state.value; if you're setting var upload_file = this.state.value; but you never assign value in the state object (in the example below).

I think you are using the value property of the input['file'] instead of the files one. You have to take the selected file using the files property and use the FormData interface to map the form parameters.

class SomeForm extends Component {

    handleSubmit(e){
        if (e.target.input.files.length) {
            const upload_file = e.target.input.files[0];
            const formData = new FormData();
            formData.append('file', upload_file);

            const request = axios.post(this.props.cfg_url+'/upload', formData)
                .then(function(response){
                    console.log('successfully uploaded', upload_file);
                });
        } else {
            console.log('You need to select a file');
        }
    }

    render(){
        return(
            <Form inline onSubmit={this.handleSubmit}>
                <FormGroup controlId='uploadFormId'>
                    <ControlLabel>Upload File:</ControlLabel>
                    <FormControl
                        type='file'
                        name="input-file"
                        label='File'
                    />
                </FormGroup>
                <Button type='submit'>Upload</Button>
            </Form>
        );
    }
}