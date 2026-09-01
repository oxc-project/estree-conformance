__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddPropToObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 20
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 24
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 33,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 39
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 45
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 60
          }
        ],
        "start": 20,
        "end": 61
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 68
          },
          "typeArguments": null,
          "start": 64,
          "end": 68
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 86
            },
            "typeArguments": null,
            "start": 83,
            "end": 86
          },
          "start": 77,
          "end": 86
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 94
              },
              "typeArguments": null,
              "start": 91,
              "end": 94
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 99
              },
              "typeArguments": null,
              "start": 95,
              "end": 99
            },
            "start": 91,
            "end": 100
          },
          "extendsType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnknownKeyword",
              "start": 109,
              "end": 116
            },
            "start": 109,
            "end": 118
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 129,
                    "end": 132
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 137
                    },
                    "typeArguments": null,
                    "start": 133,
                    "end": 137
                  },
                  "start": 129,
                  "end": 138
                },
                "start": 126,
                "end": 138
              }
            ],
            "start": 125,
            "end": 139
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 146,
            "end": 151
          },
          "start": 91,
          "end": 151
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 156,
          "end": 161
        },
        "start": 64,
        "end": 161
      },
      "declare": false,
      "start": 0,
      "end": 161
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "AddPropToObject",
    "start": 5,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 21,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 25,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 41,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 64,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 69,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 101,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 156,
    "end": 161
  }
]
```
