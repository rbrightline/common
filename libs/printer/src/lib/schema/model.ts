export type ModelName = 'User'|'Product'
export type PropertyName = 'firstName'|'lastName'

export type RelationType = 'many-to-many'|'many-to-one'|'one-to-one'|'one-to-many'
export type OnDelete = 'RESTRICT'|'CASCADE'|'SET NULL'|'DEFAULT'|'NO ACTION'
export type OnUpdate = 'RESTRICT'|'CASCADE'|'SET NULL'|'DEFAULT'|'NO ACTION'
export type NumberFormat = 'integer,float'
export type CommonNumberPropertyOptions = { numberFormat:any; //{"$ref":"#/definitions/NumberFormat"}
 minimum:any; //{"type":"number"}
 maximum:any; //{"type":"number"}
 moreThanProperty:any; //{"$ref":"#/definitions/PropertyName"}
 lessThanProperty:any; //{"$ref":"#/definitions/PropertyName"}
 }
export type General = { name:any; //{"$ref":"#/definitions/PropertyName"}
 description:any; //{"type":"string"}
 required:any; //{"type":"boolean","default":true}
 unique:any; //{"type":"boolean","default":true}
 }
export type Transform = { acceptString:any; //{"type":"boolean","description":"transform string values into the actual type before any operations","default":true}
 }
export type Validation = { equalToProperty:any; //{"$ref":"#/definitions/PropertyName","description":"Check the value is equal to the value of the property"}
 notEqualToProperty:any; //{"$ref":"#/definitions/PropertyName","description":"Check the value is not equal to the value of the property"}
 }
export type Encryption = { hash:any; //{"type":"boolean","default":true}
 encrypt:any; //{"type":"boolean","default":true}
 }
export type Dto = { write:any; //{"type":"boolean","description":"Is the property writable or internal"}
 read:any; //{"type":"boolean","description":"Is the property visible in the data load?","default":true}
 udpate:any; //{"type":"boolean","description":"Is proprety updatable?","default":true}
 }
export type UIPropertyOptions = { label:any; //{"type":"string"}
 mapTo:any; //{"$ref":"#/definitions/PropertyName"}
 inputType:any; //{"$ref":"#/definitions/InputType"}
 prefixText:any; //{"type":"string"}
 suffixText:any; //{"type":"string"}
 prefixIcon:any; //{"$ref":"#/definitions/Icon"}
 suffixIcon:any; //{"$ref":"#/definitions/Icon"}
 dependsOn:any; //{"$ref":"#/definitions/PropertyName"}
 group:any; //{"type":"string"}
 bold:any; //{"type":"boolean"}
 italic:any; //{"type":"boolean"}
 }
export type StringPropertyOptions = { type:any; //{"const":"string"}
 default:any; //{"type":"string"}
 stringFormat:any; //{"$ref":"#/definitions/StringFormat"}
 minLength:any; //{"type":"integer"}
 maxLength:any; //{"type":"integer"}
 isIn:any; //{"type":"array","uniqueItems":true,"items":{"type":"string"}}
 isNotIn:any; //{"type":"array","uniqueItems":true,"items":{"type":"string"}}
 contains:any; //{"type":"array","uniqueItems":true,"items":{"type":"string"}}
 notContains:any; //{"type":"array","uniqueItems":true,"items":{"type":"string"}}
 startWith:any; //{"type":"string"}
 notStartWith:any; //{"type":"string"}
 endWith:any; //{"type":"string"}
 notEndWith:any; //{"type":"string"}
 containProperty:any; //{"$ref":"#/definitions/PropertyName"}
 notContainProperty:any; //{"$ref":"#/definitions/PropertyName"}
 longerThanProperty:any; //{"$ref":"#/definitions/PropertyName"}
 shorterThanProperty:any; //{"$ref":"#/definitions/PropertyName"}
 }
export type BooleanPropertyOptions = { type:any; //{"const":"boolean"}
 default:any; //{"type":"boolean"}
 }
export type DatePropertyOptions = { type:any; //{"const":"date"}
 isFutureDate:any; //{"type":"boolean"}
 isPastDate:any; //{"type":"boolean"}
 default:any; //{"type":"string"}
 }
export type ObjectPropertyOptions = { type:any; //{"const":"object"}
 target:any; //{"$ref":"#/definitions/ModelName"}
 default:any; //{"type":"object"}
 }
export type ArrayPropertyOptions = { type:any; //{"const":"array"}
 default:any; //{"type":"array"}
 minSize:any; //{"type":"integer"}
 maxSize:any; //{"type":"integer"}
 items:any; //{"$ref":"#/definitions/PropertyOptions"}
 }
export type StringFormat = 'short'|'long'|'object-id'
export type InputType = 'text'|'textarea'
export type Icon = 'search'|'home'
export type ModelOptions = { type:any; //{"enum":["ENTITY","DTO","ABSTRACT_ENTITY","ABSTRACT_DTOS","TYPE","ENUM"]}
 extends:any; //{"$ref":"#/definitions/ModelName","description":"Which abstract model is extended by the entity?"}
 uniques:any; //{"type":"array","items":{"$ref":"#/definitions/PropertyName"}}
 properties:any; //{"type":"array","uniqueItems":true,"items":{"$ref":"#/definitions/PropertyOptions"}}
 relations:any; //{"type":"array","uniqueItems":true,"items":{"$ref":"#/definitions/RelationPropertyOptions"}}
 }