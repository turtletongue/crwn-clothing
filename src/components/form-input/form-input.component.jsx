import './form-input.styles.scss';

const FormInput = ({ handler, label, value, ...otherInputProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handler} value={value} {...otherInputProps} />
            {
                label ? 
                    <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                        { label }
                    </label>
                    : null
            }
        </div>
        
    );
}

export default FormInput;