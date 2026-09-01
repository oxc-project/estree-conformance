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
            "name": "Err",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 20
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 40
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 47,
            "end": 62
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 78
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 91,
                        "end": 96
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 97,
                          "end": 98
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 99,
                          "end": 100
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 101,
                          "end": 102
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 103,
                          "end": 104
                        },
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 105,
                          "end": 106
                        },
                        {
                          "type": "Literal",
                          "value": 56,
                          "raw": "56",
                          "start": 107,
                          "end": 109
                        }
                      ],
                      "optional": false,
                      "start": 91,
                      "end": 110
                    },
                    "directive": null,
                    "start": 91,
                    "end": 110
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unknown",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 125,
                        "end": 132
                      },
                      "optional": false,
                      "computed": false,
                      "start": 119,
                      "end": 132
                    },
                    "directive": null,
                    "start": 119,
                    "end": 132
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 141,
                        "end": 146
                      },
                      "property": {
                        "type": "Literal",
                        "value": "unknown",
                        "raw": "'unknown'",
                        "start": 147,
                        "end": 156
                      },
                      "optional": false,
                      "computed": true,
                      "start": 141,
                      "end": 157
                    },
                    "directive": null,
                    "start": 141,
                    "end": 157
                  }
                ],
                "start": 81,
                "end": 163
              },
              "expression": false,
              "start": 78,
              "end": 163
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 67,
            "end": 163
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "process",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 175
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 195,
                          "end": 199
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 207
                        },
                        "optional": false,
                        "computed": false,
                        "start": 195,
                        "end": 207
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "!",
                        "raw": "\"!\"",
                        "start": 210,
                        "end": 213
                      },
                      "start": 195,
                      "end": 213
                    },
                    "start": 188,
                    "end": 214
                  }
                ],
                "start": 178,
                "end": 220
              },
              "expression": false,
              "start": 175,
              "end": 220
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 168,
            "end": 220
          }
        ],
        "start": 41,
        "end": 222
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 222
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 229
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 239
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 252,
                            "end": 257
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "unknown",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 258,
                            "end": 265
                          },
                          "optional": false,
                          "computed": false,
                          "start": 252,
                          "end": 265
                        },
                        "directive": null,
                        "start": 252,
                        "end": 265
                      }
                    ],
                    "start": 242,
                    "end": 271
                  },
                  "expression": false,
                  "start": 239,
                  "end": 271
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 238,
                "end": 271
              }
            ],
            "start": 232,
            "end": 273
          },
          "definite": false,
          "start": 228,
          "end": 273
        }
      ],
      "declare": false,
      "start": 224,
      "end": 273
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 273
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
    "value": "Err",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 29,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Err",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 56,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 67,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "56",
    "start": 107,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 125,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 146,
    "end": 147
  },
  {
    "type": "String",
    "value": "'unknown'",
    "start": 147,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 195,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 208,
    "end": 209
  },
  {
    "type": "String",
    "value": "\"!\"",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 252,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Err",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 19
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 37
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 50,
                        "end": 55
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 50,
                      "end": 57
                    },
                    "directive": null,
                    "start": 50,
                    "end": 57
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 66,
                          "end": 70
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "wat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 74
                        },
                        "optional": false,
                        "computed": false,
                        "start": 66,
                        "end": 74
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 77,
                        "end": 79
                      },
                      "start": 66,
                      "end": 79
                    },
                    "directive": null,
                    "start": 66,
                    "end": 79
                  }
                ],
                "start": 40,
                "end": 85
              },
              "expression": false,
              "start": 37,
              "end": 85
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 26,
            "end": 85
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 112
                      },
                      "optional": false,
                      "computed": false,
                      "start": 104,
                      "end": 112
                    },
                    "directive": null,
                    "start": 104,
                    "end": 112
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 121,
                        "end": 125
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 129
                      },
                      "optional": false,
                      "computed": false,
                      "start": 121,
                      "end": 129
                    },
                    "directive": null,
                    "start": 121,
                    "end": 129
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 138,
                        "end": 142
                      },
                      "property": {
                        "type": "Literal",
                        "value": "wot",
                        "raw": "'wot'",
                        "start": 143,
                        "end": 148
                      },
                      "optional": false,
                      "computed": true,
                      "start": 138,
                      "end": 149
                    },
                    "directive": null,
                    "start": 138,
                    "end": 149
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 158,
                        "end": 163
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alsoBad",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 158,
                      "end": 171
                    },
                    "directive": null,
                    "start": 158,
                    "end": 171
                  }
                ],
                "start": 94,
                "end": 177
              },
              "expression": false,
              "start": 91,
              "end": 177
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 90,
            "end": 177
          }
        ],
        "start": 20,
        "end": 179
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 179
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 179
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 6,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Err",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 26,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "wat",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "wat",
    "start": 109,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "wit",
    "start": 126,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "String",
    "value": "'wot'",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "alsoBad",
    "start": 164,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  }
]
```
