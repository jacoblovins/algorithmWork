// write a function that compares two calendars and returns overlapping free times

let fullDay = ["1:00", "1:30","2:00", "2:30","3:00", "3:30","4:00", "4:30","5:00", "5:30","6:00", "6:30","7:00", "7:30","8:00", "8:30","9:00", "9:30","10:00", "10:30","11:00", "11:30","12:00", "12:30","13:00", "13:30","14:00", "14:30","15:00", "15:30","16:00", "16:30","17:00", "17:30","18:00", "18:30","19:00", "19:30","20:00", "20:30","21:00", "21:30","22:00", "22:30","23:00", "23:30","24:00", "24:30",]

function checkAvail(firstCal, firstBound, secondCal, secondBound) {

    const firstcut = fullDay.slice(fullDay.indexOf(firstBound[0]), fullDay.indexOf(firstBound[1]) + 1)
    const secondcut = firstcut.slice(firstcut.indexOf(secondBound[0]), firstcut.indexOf(secondBound[1]) + 1)

    // loop thorugh firstCal[0], find the indexes of both numbers

    console.log(secondcut)

}

const cal1 = [["9:00", "10:30"], ["12:00", "13:00"], ["16:00", "18:00"]];                       // times which the first person has meetings
const bound1 = ["9:00", "20:00"]                                                                // start and end of first persons day
const cal2 = [["10:00", "11:30"], ["12:30", "14:30"], ["14:30", "15:00"], ["16:00", "17:00"]];  // times which the second person has meetings
const bound2 = ["10:00", "18:30"]                                                               // start and end of second persons day


checkAvail(cal1, bound1, cal2, bound2)