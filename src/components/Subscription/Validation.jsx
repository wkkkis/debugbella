export default function Validate(values) {
    let errors = {};
    let valid = values.fullName && values.phone && values.category;

    if (!valid) {
        errors.valid = "Не заполнены обязательные поля";
    }
    return errors;
}
