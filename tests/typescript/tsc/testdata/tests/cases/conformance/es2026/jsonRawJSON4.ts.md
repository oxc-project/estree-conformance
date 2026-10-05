__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 37
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "rawJSON",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 45
              },
              "optional": false,
              "computed": false,
              "start": 33,
              "end": 45
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 46,
                "end": 49
              }
            ],
            "optional": false,
            "start": 33,
            "end": 50
          },
          "definite": false,
          "start": 29,
          "end": 50
        }
      ],
      "declare": false,
      "start": 23,
      "end": 51
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "rawJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 93
            },
            "optional": false,
            "computed": false,
            "start": 84,
            "end": 93
          },
          "definite": false,
          "start": 80,
          "end": 93
        }
      ],
      "declare": false,
      "start": 74,
      "end": 94
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
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
                  "name": "rawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 138
                },
                "value": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 140,
                  "end": 143
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 131,
                "end": 143
              }
            ],
            "start": 129,
            "end": 145
          },
          "definite": false,
          "start": 125,
          "end": 145
        }
      ],
      "declare": false,
      "start": 119,
      "end": 146
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 186
                },
                "start": 182,
                "end": 186
              }
            ],
            "start": 180,
            "end": 188
          },
          "definite": false,
          "start": 176,
          "end": 188
        }
      ],
      "declare": false,
      "start": 170,
      "end": 189
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 191
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rawJSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 199
          },
          "optional": false,
          "computed": false,
          "start": 190,
          "end": 199
        },
        "right": {
          "type": "Literal",
          "value": "2",
          "raw": "\"2\"",
          "start": 202,
          "end": 205
        },
        "start": 190,
        "end": 205
      },
      "directive": null,
      "start": 190,
      "end": 206
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 244
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 245,
          "end": 246
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 261,
                    "end": 265
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isRawJSON",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 275
                  },
                  "optional": false,
                  "computed": false,
                  "start": 261,
                  "end": 275
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  }
                ],
                "optional": false,
                "start": 261,
                "end": 278
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rawJSON",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 290
                },
                "optional": false,
                "computed": false,
                "start": 281,
                "end": 290
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 302
              },
              "start": 261,
              "end": 302
            },
            "start": 254,
            "end": 303
          }
        ],
        "start": 248,
        "end": 305
      },
      "expression": false,
      "start": 234,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "RawJSON",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 314
      },
      "directive": null,
      "start": 307,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 315
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 74,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 182,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 202,
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
    "start": 234,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 254,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "isRawJSON",
    "start": 266,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "rawJSON",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 293,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "RawJSON",
    "start": 307,
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
