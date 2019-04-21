import React from 'react';
import styles from './ckeditorDemo.module.scss';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-build-vcs';

const CkeditorDemo = () => (
	<div className={styles.divframe}>
        <h2>Input Demo</h2>
        <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
            }}
            onBlur={editor => {
                console.log('Blur.', editor);
            }}
            onFocus={editor => {
                console.log('Focus.', editor);
            }}
        />
    </div>
);


export default CkeditorDemo;