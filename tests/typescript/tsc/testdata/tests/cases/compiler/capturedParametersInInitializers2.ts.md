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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "right": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 46
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 50
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 38,
                  "end": 51
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
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
                            "start": 78,
                            "end": 79
                          },
                          "start": 71,
                          "end": 80
                        }
                      ],
                      "start": 70,
                      "end": 81
                    },
                    "expression": false,
                    "start": 67,
                    "end": 81
                  },
                  "kind": "get",
                  "computed": true,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 60,
                  "end": 81
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
                    "start": 90,
                    "end": 101
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 106,
                            "end": 107
                          },
                          "directive": null,
                          "start": 106,
                          "end": 108
                        }
                      ],
                      "start": 104,
                      "end": 110
                    },
                    "expression": false,
                    "start": 101,
                    "end": 110
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 90,
                  "end": 110
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 121
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
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 134,
                            "end": 135
                          },
                          "start": 127,
                          "end": 136
                        }
                      ],
                      "start": 125,
                      "end": 138
                    },
                    "expression": false,
                    "start": 122,
                    "end": 138
                  },
                  "kind": "method",
                  "computed": true,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 119,
                  "end": 138
                }
              ],
              "start": 28,
              "end": 144
            },
            "abstract": false,
            "declare": false,
            "start": 22,
            "end": 144
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 144
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 151
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 154,
            "end": 155
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 155
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 162
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 165,
            "end": 166
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 166
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 178
              },
              "optional": false,
              "computed": false,
              "start": 175,
              "end": 178
            },
            "directive": null,
            "start": 175,
            "end": 178
          }
        ],
        "start": 169,
        "end": 180
      },
      "expression": false,
      "start": 0,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 194
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 196
          },
          "right": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 208
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 213
                  },
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 206,
                  "end": 213
                }
              ],
              "start": 205,
              "end": 214
            },
            "abstract": false,
            "declare": false,
            "start": 199,
            "end": 214
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 214
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 220,
            "end": 221
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 221
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 223,
        "end": 226
      },
      "expression": false,
      "start": 181,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
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
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 38,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 71,
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
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 90,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 127,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 181,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 199,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 225,
    "end": 226
  }
]
```
