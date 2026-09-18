__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "descending",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 23
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "100000000000000000000n",
                    "bigint": "100000000000000000000",
                    "start": 27,
                    "end": 49
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "100n",
                    "bigint": "100",
                    "start": 51,
                    "end": 55
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "10n",
                    "bigint": "10",
                    "start": 57,
                    "end": 60
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "2n",
                    "bigint": "2",
                    "start": 62,
                    "end": 64
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "1n",
                    "bigint": "1",
                    "start": 66,
                    "end": 68
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "0n",
                    "bigint": "0",
                    "start": 70,
                    "end": 72
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "1n",
                      "bigint": "1",
                      "start": 75,
                      "end": 77
                    },
                    "prefix": true,
                    "start": 74,
                    "end": 77
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "2n",
                      "bigint": "2",
                      "start": 80,
                      "end": 82
                    },
                    "prefix": true,
                    "start": 79,
                    "end": 82
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "10n",
                      "bigint": "10",
                      "start": 85,
                      "end": 88
                    },
                    "prefix": true,
                    "start": 84,
                    "end": 88
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "100n",
                      "bigint": "100",
                      "start": 91,
                      "end": 95
                    },
                    "prefix": true,
                    "start": 90,
                    "end": 95
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "100000000000000000000n",
                      "bigint": "100000000000000000000",
                      "start": 98,
                      "end": 120
                    },
                    "prefix": true,
                    "start": 97,
                    "end": 120
                  }
                ],
                "start": 26,
                "end": 121
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 130
                },
                "typeArguments": null,
                "start": 125,
                "end": 130
              },
              "start": 26,
              "end": 130
            },
            "definite": false,
            "start": 13,
            "end": 130
          }
        ],
        "declare": false,
        "start": 7,
        "end": 131
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 131
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ascending",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 154
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "100000000000000000000n",
                      "bigint": "100000000000000000000",
                      "start": 159,
                      "end": 181
                    },
                    "prefix": true,
                    "start": 158,
                    "end": 181
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "100n",
                      "bigint": "100",
                      "start": 184,
                      "end": 188
                    },
                    "prefix": true,
                    "start": 183,
                    "end": 188
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "10n",
                      "bigint": "10",
                      "start": 191,
                      "end": 194
                    },
                    "prefix": true,
                    "start": 190,
                    "end": 194
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "2n",
                      "bigint": "2",
                      "start": 197,
                      "end": 199
                    },
                    "prefix": true,
                    "start": 196,
                    "end": 199
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "1n",
                      "bigint": "1",
                      "start": 202,
                      "end": 204
                    },
                    "prefix": true,
                    "start": 201,
                    "end": 204
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "0n",
                    "bigint": "0",
                    "start": 206,
                    "end": 208
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "1n",
                    "bigint": "1",
                    "start": 210,
                    "end": 212
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "2n",
                    "bigint": "2",
                    "start": 214,
                    "end": 216
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "10n",
                    "bigint": "10",
                    "start": 218,
                    "end": 221
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "100n",
                    "bigint": "100",
                    "start": 223,
                    "end": 227
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "100000000000000000000n",
                    "bigint": "100000000000000000000",
                    "start": 229,
                    "end": 251
                  }
                ],
                "start": 157,
                "end": 252
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 261
                },
                "typeArguments": null,
                "start": 256,
                "end": 261
              },
              "start": 157,
              "end": 261
            },
            "definite": false,
            "start": 145,
            "end": 261
          }
        ],
        "declare": false,
        "start": 139,
        "end": 262
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 132,
      "end": 262
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 282
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "descending",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 299
                  },
                  "start": 286,
                  "end": 299
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ascending",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 313
                  },
                  "start": 301,
                  "end": 313
                }
              ],
              "start": 285,
              "end": 314
            },
            "definite": false,
            "start": 276,
            "end": 314
          }
        ],
        "declare": false,
        "start": 270,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 263,
      "end": 315
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 315
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "descending",
    "start": 13,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Numeric",
    "value": "100000000000000000000n",
    "start": 27,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "100n",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "2n",
    "start": 62,
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
    "value": "1n",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "2n",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "100n",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "100000000000000000000n",
    "start": 98,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 122,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 132,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 139,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "ascending",
    "start": 145,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "-",
    "start": 158,
    "end": 159
  },
  {
    "type": "Numeric",
    "value": "100000000000000000000n",
    "start": 159,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 183,
    "end": 184
  },
  {
    "type": "Numeric",
    "value": "100n",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 190,
    "end": 191
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 191,
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
    "value": "-",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "2n",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 208,
    "end": 209
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "Numeric",
    "value": "2n",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "10n",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Numeric",
    "value": "100n",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "100000000000000000000n",
    "start": 229,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 253,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 263,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 270,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "descending",
    "start": 289,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "ascending",
    "start": 304,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  }
]
```
