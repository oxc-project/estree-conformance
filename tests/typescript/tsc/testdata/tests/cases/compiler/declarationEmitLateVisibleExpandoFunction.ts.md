__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 21,
        "end": 24
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              },
              "typeArguments": null,
              "start": 36,
              "end": 37
            },
            "start": 34,
            "end": 37
          },
          "start": 25,
          "end": 37
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "typeArguments": null,
          "start": 40,
          "end": 41
        },
        "start": 38,
        "end": 41
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 70
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 82,
              "end": 86
            },
            "start": 75,
            "end": 87
          }
        ],
        "start": 73,
        "end": 89
      },
      "expression": false,
      "start": 44,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 107
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 117
          },
          "optional": false,
          "computed": false,
          "start": 90,
          "end": 117
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 125
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 127,
                "end": 128
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 122,
              "end": 128
            }
          ],
          "start": 120,
          "end": 130
        },
        "start": 90,
        "end": 130
      },
      "directive": null,
      "start": 90,
      "end": 131
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
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 153
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 162,
              "end": 166
            },
            "id": null,
            "generator": false,
            "start": 156,
            "end": 166
          },
          "definite": false,
          "start": 139,
          "end": 166
        }
      ],
      "declare": false,
      "start": 133,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 192
          },
          "optional": false,
          "computed": false,
          "start": 168,
          "end": 192
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 200
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 202,
                "end": 203
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 197,
              "end": 203
            }
          ],
          "start": 195,
          "end": 205
        },
        "start": 168,
        "end": 205
      },
      "directive": null,
      "start": 168,
      "end": 206
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnusedComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 232
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 244,
              "end": 248
            },
            "start": 237,
            "end": 249
          }
        ],
        "start": 235,
        "end": 251
      },
      "expression": false,
      "start": 208,
      "end": 251
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnusedComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 267
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 277
          },
          "optional": false,
          "computed": false,
          "start": 252,
          "end": 277
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 285
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 287,
                "end": 288
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 282,
              "end": 288
            }
          ],
          "start": 280,
          "end": 290
        },
        "start": 252,
        "end": 290
      },
      "directive": null,
      "start": 252,
      "end": 291
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
              "name": "WrappedFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 321
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 328
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 346
                }
              ],
              "optional": false,
              "start": 324,
              "end": 347
            },
            "definite": false,
            "start": 306,
            "end": 347
          }
        ],
        "declare": false,
        "start": 300,
        "end": 348
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 348
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
              "name": "WrappedArrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 374
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 381
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrowComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 396
                }
              ],
              "optional": false,
              "start": 377,
              "end": 397
            },
            "definite": false,
            "start": 362,
            "end": 397
          }
        ],
        "declare": false,
        "start": 356,
        "end": 398
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 349,
      "end": 398
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 399
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 25,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "function",
    "start": 44,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 53,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 75,
    "end": 81
  },
  {
    "type": "Null",
    "value": "null",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 90,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 108,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
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
    "value": "const",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 139,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 159,
    "end": 161
  },
  {
    "type": "Null",
    "value": "null",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 168,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 183,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 208,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "UnusedComponent",
    "start": 217,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 237,
    "end": 243
  },
  {
    "type": "Null",
    "value": "null",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "UnusedComponent",
    "start": 252,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 268,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 293,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "WrappedFunction",
    "start": 306,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 329,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 349,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 356,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "WrappedArrow",
    "start": 362,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 382,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 86
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "component",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 106
            },
            "start": 90,
            "end": 107
          }
        ],
        "start": 88,
        "end": 109
      },
      "expression": false,
      "start": 63,
      "end": 109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 137
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 149,
              "end": 153
            },
            "start": 142,
            "end": 154
          }
        ],
        "start": 140,
        "end": 156
      },
      "expression": false,
      "start": 111,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 174
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "propTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 184
          },
          "optional": false,
          "computed": false,
          "start": 157,
          "end": 184
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 192
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 194,
                "end": 195
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 189,
              "end": 195
            }
          ],
          "start": 187,
          "end": 197
        },
        "start": 157,
        "end": 197
      },
      "directive": null,
      "start": 157,
      "end": 198
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
              "name": "WrappedFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 228
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 235
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 253
                }
              ],
              "optional": false,
              "start": 231,
              "end": 254
            },
            "definite": false,
            "start": 213,
            "end": 254
          }
        ],
        "declare": false,
        "start": 207,
        "end": 255
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 200,
      "end": 255
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 63,
  "end": 255
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 77,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 90,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 97,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 111,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 120,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 142,
    "end": 148
  },
  {
    "type": "Null",
    "value": "null",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 157,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 175,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 200,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 207,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "WrappedFunction",
    "start": 213,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 236,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  }
]
```
