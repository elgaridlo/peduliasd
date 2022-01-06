import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const RTE = ({dataSummernote}) => {

    const handleEditorChange = (content, editor) => {
        dataSummernote(content)
    };


    return (
        <Editor
            apiKey="c8kzax1a706e1g2hh7aaw8q3ob2w6dax5n3njvg6s1ahgjyv"
            initialValue="<p>Tulisan ini merupakan inisial pertama</p>"
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
