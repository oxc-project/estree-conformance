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
        "name": "Cls",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 66
      },
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
              "type": "PrivateIdentifier",
              "name": "privateProp",
              "start": 71,
              "end": 83
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 85,
                    "end": 91
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 94,
                    "end": 103
                  }
                ],
                "start": 85,
                "end": 103
              },
              "start": 83,
              "end": 103
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
            "start": 71,
            "end": 104
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "problem",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
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
                      "type": "AssignmentExpression",
                      "operator": "??=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "privateProp",
                          "start": 129,
                          "end": 141
                        },
                        "optional": false,
                        "computed": false,
                        "start": 124,
                        "end": 141
                      },
                      "right": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 146,
                          "end": 151
                        },
                        "consequent": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "neverThis",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 154,
                            "end": 163
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 154,
                          "end": 165
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 168,
                          "end": 170
                        },
                        "start": 146,
                        "end": 170
                      },
                      "start": 124,
                      "end": 170
                    },
                    "directive": null,
                    "start": 124,
                    "end": 171
                  }
                ],
                "start": 118,
                "end": 175
              },
              "expression": false,
              "start": 115,
              "end": 175
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 108,
            "end": 175
          }
        ],
        "start": 67,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "neverThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 197
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 201,
          "end": 206
        },
        "start": 199,
        "end": 206
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 226
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "This should really really never happen!",
                  "raw": "\"This should really really never happen!\"",
                  "start": 227,
                  "end": 268
                }
              ],
              "start": 217,
              "end": 269
            },
            "start": 211,
            "end": 270
          }
        ],
        "start": 207,
        "end": 272
      },
      "expression": false,
      "start": 179,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 272
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "PrivateIdentifier",
    "value": "privateProp",
    "start": 71,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 94,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "problem",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
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
    "type": "PrivateIdentifier",
    "value": "privateProp",
    "start": 129,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 142,
    "end": 145
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "neverThis",
    "start": 154,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 179,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "neverThis",
    "start": 188,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 211,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "String",
    "value": "\"This should really really never happen!\"",
    "start": 227,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  }
]
```
