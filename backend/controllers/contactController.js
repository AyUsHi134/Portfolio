const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const createContact = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        if (typeof name !== "string" || !name.trim()) {
            const error = new Error("name is required");
            error.statusCode = 400;
            return next(error);
        }

        if (typeof email !== "string" || !email.trim() || !EMAIL_PATTERN.test(email.trim())) {
            const error = new Error("a valid email is required");
            error.statusCode = 400;
            return next(error);
        }

        if (typeof message !== "string" || !message.trim()) {
            const error = new Error("message is required");
            error.statusCode = 400;
            return next(error);
        }

        // Email sending is not implemented yet; this only validates and acknowledges the submission.
        return res.status(200).json({
            success: true,
            message: "Message received",
        });
    } catch (error) {
        next(error);
    }
};

export { createContact };
