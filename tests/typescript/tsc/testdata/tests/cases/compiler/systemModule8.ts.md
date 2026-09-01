__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 12
          }
        ],
        "declare": false,
        "start": 7,
        "end": 13
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 18,
          "end": 19
        },
        "start": 14,
        "end": 19
      },
      "directive": null,
      "start": 14,
      "end": 20
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 22
        },
        "start": 21,
        "end": 24
      },
      "directive": null,
      "start": 21,
      "end": 25
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 27
        },
        "start": 26,
        "end": 29
      },
      "directive": null,
      "start": 26,
      "end": 30
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 34
        },
        "start": 31,
        "end": 34
      },
      "directive": null,
      "start": 31,
      "end": 35
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 39
        },
        "start": 36,
        "end": 39
      },
      "directive": null,
      "start": 36,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 42
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 46,
          "end": 47
        },
        "start": 41,
        "end": 47
      },
      "directive": null,
      "start": 41,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 50
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 54,
          "end": 55
        },
        "start": 49,
        "end": 55
      },
      "directive": null,
      "start": 49,
      "end": 56
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 58
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 62,
          "end": 63
        },
        "start": 57,
        "end": 63
      },
      "directive": null,
      "start": 57,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 66
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 70,
          "end": 71
        },
        "start": 65,
        "end": 71
      },
      "directive": null,
      "start": 65,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "|=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 74
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 78,
          "end": 79
        },
        "start": 73,
        "end": 79
      },
      "directive": null,
      "start": 73,
      "end": 80
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 86,
          "end": 87
        },
        "start": 81,
        "end": 87
      },
      "directive": null,
      "start": 81,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 90
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 93,
          "end": 94
        },
        "start": 89,
        "end": 94
      },
      "directive": null,
      "start": 89,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 97
        },
        "operator": "-",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 100,
          "end": 101
        },
        "start": 96,
        "end": 101
      },
      "directive": null,
      "start": 96,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "operator": "&",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 107,
          "end": 108
        },
        "start": 103,
        "end": 108
      },
      "directive": null,
      "start": 103,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 111
        },
        "operator": "|",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 114,
          "end": 115
        },
        "start": 110,
        "end": 115
      },
      "directive": null,
      "start": 110,
      "end": 116
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 123
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 126,
          "end": 127
        },
        "start": 122,
        "end": 127
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 130
        },
        "start": 129,
        "end": 132
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 134,
        "end": 136
      },
      "start": 117,
      "end": 136
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 143
        },
        "right": {
          "type": "Literal",
          "value": 8,
          "raw": "8",
          "start": 146,
          "end": 147
        },
        "start": 142,
        "end": 147
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 150
        },
        "start": 149,
        "end": 152
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 154,
        "end": 156
      },
      "start": 137,
      "end": 156
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 163
        },
        "right": {
          "type": "Literal",
          "value": 15,
          "raw": "15",
          "start": 166,
          "end": 168
        },
        "start": 162,
        "end": 168
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 173
        },
        "start": 170,
        "end": 173
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 175,
        "end": 177
      },
      "start": 157,
      "end": 177
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 184
        },
        "right": {
          "type": "Literal",
          "value": 18,
          "raw": "18",
          "start": 187,
          "end": 189
        },
        "start": 183,
        "end": 189
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 194
        },
        "start": 191,
        "end": 194
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 196,
        "end": 198
      },
      "start": 178,
      "end": 198
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "init": {
              "type": "Literal",
              "value": 50,
              "raw": "50",
              "start": 213,
              "end": 215
            },
            "definite": false,
            "start": 209,
            "end": 215
          }
        ],
        "declare": false,
        "start": 205,
        "end": 215
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 219,
        "end": 221
      },
      "start": 200,
      "end": 221
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 234
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 244
              },
              "right": {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 247,
                "end": 250
              },
              "start": 243,
              "end": 250
            },
            "directive": null,
            "start": 243,
            "end": 251
          }
        ],
        "start": 237,
        "end": 253
      },
      "expression": false,
      "start": 222,
      "end": 253
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 268
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 269
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 273,
                  "end": 274
                }
              ],
              "start": 272,
              "end": 275
            },
            "definite": false,
            "start": 266,
            "end": 275
          }
        ],
        "declare": false,
        "start": 262,
        "end": 276
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 255,
      "end": 276
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 296
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 291,
                  "end": 296
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 299
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 303
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 305,
                          "end": 307
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 302,
                        "end": 307
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 308
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 298,
                  "end": 308
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 309
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 314
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 316,
                    "end": 320
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 313,
                  "end": 320
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 323
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 326,
                          "end": 327
                        },
                        "value": {
                          "type": "Literal",
                          "value": "123",
                          "raw": "\"123\"",
                          "start": 329,
                          "end": 334
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 326,
                        "end": 334
                      }
                    ],
                    "start": 325,
                    "end": 335
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 322,
                  "end": 335
                }
              ],
              "start": 312,
              "end": 336
            },
            "definite": false,
            "start": 290,
            "end": 336
          }
        ],
        "declare": false,
        "start": 284,
        "end": 337
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 277,
      "end": 337
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 345
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 346
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 352,
                "end": 353
              }
            ],
            "start": 351,
            "end": 354
          }
        ],
        "start": 350,
        "end": 355
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 357,
        "end": 359
      },
      "start": 338,
      "end": 359
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 359
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
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 31,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 36,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 43,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 51,
    "end": 53
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 59,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 67,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "|=",
    "start": 75,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "&=",
    "start": 83,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 91,
    "end": 92
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 112,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "x",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 191,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "50",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 222,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 255,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 277,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "z0",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 329,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 351,
    "end": 352
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  }
]
```
