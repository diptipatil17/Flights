const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneReppository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneReppository.create(data);
        return airplane;
    } catch (error) {
        if ((error.name = "SequelizeValidationError")) {
            let explaination = [];
            error.errors.forEach((err) => {
                explaination.push(err.massage);
            });

            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "can not create new Airplane object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneReppository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError(
            "can not fetch the data of all airplanes",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
module.exports = {
    createAirplane,
    getAirplanes
};
