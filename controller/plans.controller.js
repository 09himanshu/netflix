const User = require('../model/user.model');
const Plan = require('../model/plan.models');
const utils = require('../utils/plan');

exports.create = async (req, res) => {
    let plan_id = req.body.plan_id;
    let duration, price, device;

    for(let key in utils) {
        if(key == plan_id) {
            duration = utils[key].duration,
            price = utils[key].price,
            device = utils[key].device
        }
    }

    const obj = {
        plan_id: plan_id,
        duration: duration,
        price: price,
        device: device
    }

    try{
        const plan = await Plan.create(obj);
        
        let user = await User.findOne({_id: req._id});
        user.plans = plan._id;
        await user.save();
        plan.userId = req._id;
        await plan.save();
        res.status(200).send(plan);
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}