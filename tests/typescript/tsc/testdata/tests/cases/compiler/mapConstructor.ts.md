__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null,
          "start": 4,
          "end": 7
        },
        "typeArguments": null,
        "arguments": [],
        "start": 0,
        "end": 9
      },
      "directive": null,
      "start": 0,
      "end": 10
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "potentiallyUndefinedIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 46
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 51,
                      "end": 54
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 56,
                      "end": 57
                    }
                  ],
                  "start": 50,
                  "end": 58
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 61,
                      "end": 64
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 66,
                      "end": 67
                    }
                  ],
                  "start": 60,
                  "end": 68
                }
              ],
              "start": 49,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 81
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 83,
                            "end": 89
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 91,
                            "end": 97
                          }
                        ],
                        "start": 82,
                        "end": 98
                      }
                    ],
                    "start": 81,
                    "end": 99
                  },
                  "start": 73,
                  "end": 99
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 102,
                  "end": 111
                }
              ],
              "start": 73,
              "end": 111
            },
            "start": 49,
            "end": 111
          },
          "definite": false,
          "start": 18,
          "end": 111
        }
      ],
      "declare": false,
      "start": 12,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 120
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "potentiallyUndefinedIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 149
          }
        ],
        "start": 113,
        "end": 150
      },
      "directive": null,
      "start": 113,
      "end": 151
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "potentiallyNullIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 182
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 187,
                      "end": 190
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 192,
                      "end": 193
                    }
                  ],
                  "start": 186,
                  "end": 194
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 197,
                      "end": 200
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 202,
                      "end": 203
                    }
                  ],
                  "start": 196,
                  "end": 204
                }
              ],
              "start": 185,
              "end": 205
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 217
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 219,
                            "end": 225
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 227,
                            "end": 233
                          }
                        ],
                        "start": 218,
                        "end": 234
                      }
                    ],
                    "start": 217,
                    "end": 235
                  },
                  "start": 209,
                  "end": 235
                },
                {
                  "type": "TSNullKeyword",
                  "start": 238,
                  "end": 242
                }
              ],
              "start": 209,
              "end": 242
            },
            "start": 185,
            "end": 242
          },
          "definite": false,
          "start": 159,
          "end": 242
        }
      ],
      "declare": false,
      "start": 153,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null,
          "start": 248,
          "end": 251
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "potentiallyNullIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 275
          }
        ],
        "start": 244,
        "end": 276
      },
      "directive": null,
      "start": 244,
      "end": 277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 277
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "new",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 12,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "potentiallyUndefinedIterable",
    "start": 18,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 70,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 73,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 102,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "potentiallyUndefinedIterable",
    "start": 121,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "potentiallyNullIterable",
    "start": 159,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ",",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 196,
    "end": 197
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 206,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 209,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 236,
    "end": 237
  },
  {
    "type": "Null",
    "value": "null",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 244,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "potentiallyNullIterable",
    "start": 252,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  }
]
```
