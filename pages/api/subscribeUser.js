function validateEmail(email)
{
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email);
}

function onlyLettersAndNumbers(name) {
    return /^[A-Za-z0-9\s]*$/.test(name);
}

export default async (req, res) => {
    const { email, name } = req.body;

    if (!email || email == "" || !validateEmail(email)) {
        return res.status(400).json({ error: 'L\'e-mail est obligatoire' });
    }
    if (!name || name == "" || !onlyLettersAndNumbers(name)) {
        return res.status(400).json({ error: 'Le nom est obligatoire' });
    }

    try {
        let data = "mauticform[formName]=emailcatcher&mauticform[formId]=1&mauticform[f_name]="+encodeURIComponent(name)+"&mauticform[email]="+encodeURIComponent(email)

        const response = await fetch(
            `https://go.independence-dev.com/form/submit?formId=1`,

            {
                body: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'POST',
            }
        );

        if (response.status >= 400) {
            return res.status(400).json({
                error: `Une erreur s'est produite lors de l'inscription à la newsletter.
        Contactez-moi à l'adresse contact@independence-dev.com et je vous ajouterai à l'ancienne :(.`,
            });
        }

        return res.status(201).json({ error: '' });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
    return res.status(500).json({ error: error.message || error.toString() });
};