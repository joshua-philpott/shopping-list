import React from 'react'
import { ListItem, CheckBox, Text, Body, Right, Icon } from 'native-base'
import { GroceryItem } from '../../interfaces/ShoppingList/types'

export interface Props {
  item: GroceryItem
  checked: boolean
  onCheck: (itemKey: string) => void
  onPress: (item: GroceryItem) => void
}

export default class ShoppingListItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  buildQuantityString(): string {
    let quantity: string = ''
    if (this.props.item.quantity) {
      quantity += ' - ' + this.props.item.quantity
    }

    if (this.props.item.quantityType) {
      quantity += ' ' + this.props.item.quantityType
    }

    return quantity
  }

  render() {
    let quantityString: string = this.buildQuantityString()

    return (
      <ListItem
        onPress={() => {
          this.props.onPress(this.props.item)
        }}>
        <CheckBox
          onPress={() => this.props.onCheck(this.props.item.id)}
          checked={this.props.checked}
          hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
        />
        <Body style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 0 }}>{this.props.item.name}</Text>
          <Text
            style={{ fontStyle: 'italic', color: 'dimgray', marginLeft: 0 }}>
            {quantityString}
          </Text>
        </Body>
        <Right>
          <Icon name='arrow-dropright' style={{ fontSize: 30 }} />
        </Right>
      </ListItem>
    )
  }
}
