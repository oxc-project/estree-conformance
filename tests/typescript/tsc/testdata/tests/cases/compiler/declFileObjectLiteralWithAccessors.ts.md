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
        "name": "makePoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 23
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 27,
              "end": 33
            },
            "start": 25,
            "end": 33
          },
          "start": 24,
          "end": 33
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 62,
                    "end": 64
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 59,
                  "end": 64
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 91,
                            "end": 92
                          },
                          "start": 84,
                          "end": 93
                        }
                      ],
                      "start": 82,
                      "end": 95
                    },
                    "expression": false,
                    "start": 79,
                    "end": 95
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 74,
                  "end": 95
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 110
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 114,
                            "end": 120
                          },
                          "start": 112,
                          "end": 120
                        },
                        "start": 111,
                        "end": 120
                      }
                    ],
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 124,
                                "end": 128
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 129,
                                "end": 130
                              },
                              "optional": false,
                              "computed": false,
                              "start": 124,
                              "end": 130
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 133,
                              "end": 134
                            },
                            "start": 124,
                            "end": 134
                          },
                          "directive": null,
                          "start": 124,
                          "end": 135
                        }
                      ],
                      "start": 122,
                      "end": 137
                    },
                    "expression": false,
                    "start": 110,
                    "end": 137
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 105,
                  "end": 137
                }
              ],
              "start": 49,
              "end": 143
            },
            "start": 42,
            "end": 144
          }
        ],
        "start": 35,
        "end": 146
      },
      "expression": false,
      "start": 0,
      "end": 146
    },
    {
      "type": "EmptyStatement",
      "start": 146,
      "end": 147
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
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 162
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makePoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 174
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 175,
                "end": 176
              }
            ],
            "optional": false,
            "start": 165,
            "end": 177
          },
          "definite": false,
          "start": 157,
          "end": 177
        }
      ],
      "declare": false,
      "start": 148,
      "end": 178
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "point",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 197
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "optional": false,
            "computed": false,
            "start": 192,
            "end": 199
          },
          "definite": false,
          "start": 188,
          "end": 199
        }
      ],
      "declare": false,
      "start": 179,
      "end": 200
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
            "name": "point",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 206
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 213
          },
          "optional": false,
          "computed": false,
          "start": 201,
          "end": 213
        },
        "right": {
          "type": "Literal",
          "value": 30,
          "raw": "30",
          "start": 216,
          "end": 218
        },
        "start": 201,
        "end": 218
      },
      "directive": null,
      "start": 201,
      "end": 219
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 219
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "makePoint",
    "start": 14,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "10",
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
    "type": "Identifier",
    "value": "get",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 84,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "point",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "makePoint",
    "start": 165,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "point",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "point",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  }
]
```
