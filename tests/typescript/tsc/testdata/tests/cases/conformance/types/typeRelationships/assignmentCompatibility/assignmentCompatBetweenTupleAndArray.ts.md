__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 26,
                    "end": 32
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 34,
                    "end": 40
                  }
                ],
                "start": 25,
                "end": 41
              },
              "start": 23,
              "end": 41
            },
            "start": 12,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 41
        }
      ],
      "declare": true,
      "start": 0,
      "end": 42
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numNumTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 69,
                    "end": 75
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 77,
                    "end": 83
                  }
                ],
                "start": 68,
                "end": 84
              },
              "start": 66,
              "end": 84
            },
            "start": 55,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 84
        }
      ],
      "declare": true,
      "start": 43,
      "end": 85
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numEmptyObjTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 117,
                    "end": 123
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 125,
                    "end": 127
                  }
                ],
                "start": 116,
                "end": 128
              },
              "start": 114,
              "end": 128
            },
            "start": 98,
            "end": 128
          },
          "init": null,
          "definite": false,
          "start": 98,
          "end": 128
        }
      ],
      "declare": true,
      "start": 86,
      "end": 129
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "emptyObjTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 158,
                    "end": 160
                  }
                ],
                "start": 157,
                "end": 161
              },
              "start": 155,
              "end": 161
            },
            "start": 142,
            "end": 161
          },
          "init": null,
          "definite": false,
          "start": 142,
          "end": 161
        }
      ],
      "declare": true,
      "start": 130,
      "end": 162
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 186,
                  "end": 192
                },
                "start": 186,
                "end": 194
              },
              "start": 184,
              "end": 194
            },
            "start": 176,
            "end": 194
          },
          "init": null,
          "definite": false,
          "start": 176,
          "end": 194
        }
      ],
      "declare": true,
      "start": 164,
      "end": 195
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "emptyObjArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 223,
                  "end": 225
                },
                "start": 223,
                "end": 227
              },
              "start": 221,
              "end": 227
            },
            "start": 208,
            "end": 227
          },
          "init": null,
          "definite": false,
          "start": 208,
          "end": 227
        }
      ],
      "declare": true,
      "start": 196,
      "end": 228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 242,
          "end": 250
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 264
        },
        "start": 242,
        "end": 264
      },
      "directive": null,
      "start": 242,
      "end": 265
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 279
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 295
        },
        "start": 266,
        "end": 295
      },
      "directive": null,
      "start": 266,
      "end": 296
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 310
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 324
        },
        "start": 297,
        "end": 324
      },
      "directive": null,
      "start": 297,
      "end": 325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 339
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 353
        },
        "start": 326,
        "end": 353
      },
      "directive": null,
      "start": 326,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 368
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numEmptyObjTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 387
        },
        "start": 355,
        "end": 387
      },
      "directive": null,
      "start": 355,
      "end": 388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 399,
          "end": 407
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 410,
          "end": 421
        },
        "start": 399,
        "end": 421
      },
      "directive": null,
      "start": 399,
      "end": 422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 423,
          "end": 436
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 452
        },
        "start": 423,
        "end": 452
      },
      "directive": null,
      "start": 423,
      "end": 453
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 453
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 12,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 43,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "numNumTuple",
    "start": 55,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 86,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "numEmptyObjTuple",
    "start": 98,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "emptyObjTuple",
    "start": 142,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 164,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 172,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "numArray",
    "start": 176,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 196,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 208,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "numArray",
    "start": 242,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "numNumTuple",
    "start": 253,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 266,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "emptyObjTuple",
    "start": 282,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 297,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 313,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 326,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "numNumTuple",
    "start": 342,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 355,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "numEmptyObjTuple",
    "start": 371,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "numArray",
    "start": 399,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 410,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "emptyObjTuple",
    "start": 423,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "emptyObjArray",
    "start": 439,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  }
]
```
