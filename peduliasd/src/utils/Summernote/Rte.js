import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const RTE = ({dataSummernote, input}) => {

    const handleEditorChange = (content, editor) => {
        dataSummernote(content)
    };


    return (
        <Editor
            apiKey="820gtvt7yqmulqcxtpzbja076dwspze9klex1yofkos8wbwj"
            value={input}
            // initialValue= "<p>Tulisan ini merupakan inisial pertama</p>"
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    "advlist autolink lists link image code charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                    "undo redo | formatselect | code |link | image | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help ",
            }}
            onEditorChange={handleEditorChange}
        />
    );
}

export default RTE;
