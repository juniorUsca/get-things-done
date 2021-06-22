import 'package:flutter/material.dart';
import 'styles.dart';

class RowBoxData {
  String title;
  String subtitle;
  DecorationImage image;
  RowBoxData({this.subtitle, this.title, this.image});
}

class DataListBuilder {
  List<RowBoxData> rowItemList = [];
  RowBoxData row1 = new RowBoxData(
      title: "Catch up with Tom",
      subtitle: "5 - 6pm  Hangouts",
      image: avatar1);
  RowBoxData row2 = new RowBoxData(
      title: "Yoga classes with Emily",
      subtitle: "7 - 8am Workout",
      image: avatar2);
  RowBoxData row3 = new RowBoxData(
      title: "Breakfast with Harry", subtitle: "9 - 10am ", image: avatar3);
  RowBoxData row4 = new RowBoxData(
      title: "Meet Pheobe ", subtitle: "12 - 1pm  Meeting", image: avatar4);
  RowBoxData row5 = new RowBoxData(
      title: "Lunch with Janet and friends",
      subtitle: "2 - 3pm ",
      image: avatar5);
  RowBoxData row6 = new RowBoxData(
      title: "Catch up with Tom",
      subtitle: "5 - 6pm  Hangouts",
      image: avatar6);

  DataListBuilder() {
    rowItemList.add(row1);
    rowItemList.add(row2);
    rowItemList.add(row3);
    rowItemList.add(row4);
    rowItemList.add(row5);
    rowItemList.add(row6);
  }
}
