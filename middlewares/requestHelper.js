
export default function (req, res){
    req.body = req.body || {};
    if (req.query) {
        req.body = {
            ...req.body,
            ...req.query,
        }
    }
}