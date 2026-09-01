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
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 99,
                  "end": 106
                },
                "start": 99,
                "end": 108
              },
              "start": 90,
              "end": 108
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 108
          }
        ],
        "start": 76,
        "end": 109
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          },
          "typeArguments": null,
          "start": 112,
          "end": 113
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSAnyKeyword",
                "start": 132,
                "end": 135
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 166
                          },
                          "typeArguments": null,
                          "start": 165,
                          "end": 166
                        },
                        "start": 165,
                        "end": 168
                      },
                      "start": 156,
                      "end": 168
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 146,
                    "end": 168
                  },
                  "start": 140,
                  "end": 168
                },
                "start": 137,
                "end": 168
              }
            ],
            "start": 131,
            "end": 169
          },
          "start": 122,
          "end": 169
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 173
          },
          "typeArguments": null,
          "start": 172,
          "end": 173
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 176,
          "end": 181
        },
        "start": 112,
        "end": 181
      },
      "declare": false,
      "start": 68,
      "end": 182
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 198
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 199,
                    "end": 202
                  },
                  "start": 199,
                  "end": 202
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 205,
                    "end": 208
                  },
                  "start": 205,
                  "end": 208
                }
              ],
              "start": 199,
              "end": 208
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 211,
                    "end": 214
                  },
                  "start": 211,
                  "end": 214
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 216,
                    "end": 219
                  },
                  "start": 216,
                  "end": 219
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 221,
                    "end": 224
                  },
                  "start": 221,
                  "end": 224
                }
              ],
              "start": 210,
              "end": 225
            }
          ],
          "start": 198,
          "end": 226
        },
        "start": 195,
        "end": 226
      },
      "declare": false,
      "start": 183,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 226
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 82,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 90,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 99,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 114,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 122,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 148,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 156,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 176,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 183,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Res1",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 203,
    "end": 204
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  }
]
```
