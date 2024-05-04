const Subscription = require('../Modules/Subscription')

const subscription = async (req, res) => {
    const details = req.body
    // console.log(details)
    // console.log("xedcfgvbhnjkm",Phone,StartDate)
    Subscription.create(details)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
};

const getData = async (req, res) => {
    try {
        const data = await Subscription.find({});
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}

const getdatabyid=async(req,res)=>{
    try {
        const data=await Subscription.findById(req.params.id)
        res.send(data)
    }
    catch (error) {
        console.log(error);
    }
}

const updateData = async (req, res) => {
    try {
        console.log(req.body)
        const data = await Subscription.findByIdAndUpdate(req.params.id, req.body);
        res.send(data)
    }
    catch (error) {
        console.log(error);
    }
}

const deleteData = async (req, res) => {
    try {
        const data = await Subscription.findByIdAndDelete(req.params.id);
        res.send(data)
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = {
    subscription,
    getData,
    deleteData,
    getdatabyid,
    updateData,
}