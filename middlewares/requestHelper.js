
export default function (req, res, next){
    req.body = req.body || {};
    if (req.query) {
        req.body = {
            ...req.body,
            ...req.query,
        }
    };
    next();
}