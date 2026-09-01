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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "x",
              "start": 21,
              "end": 23
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 26,
              "end": 27
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 28
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
              "start": 33,
              "end": 44
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 65
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
                            "name": "x",
                            "start": 80,
                            "end": 82
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 85,
                            "end": 86
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 80,
                          "end": 87
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
                            "start": 100,
                            "end": 111
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
                                  "type": "ClassDeclaration",
                                  "decorators": [],
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 138,
                                    "end": 139
                                  },
                                  "typeParameters": null,
                                  "superClass": null,
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
                                          "start": 162,
                                          "end": 173
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
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "A",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 202,
                                                    "end": 203
                                                  },
                                                  "property": {
                                                    "type": "PrivateIdentifier",
                                                    "name": "x",
                                                    "start": 204,
                                                    "end": 206
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 202,
                                                  "end": 206
                                                },
                                                "directive": null,
                                                "start": 202,
                                                "end": 206
                                              }
                                            ],
                                            "start": 176,
                                            "end": 237
                                          },
                                          "expression": false,
                                          "start": 173,
                                          "end": 237
                                        },
                                        "kind": "constructor",
                                        "computed": false,
                                        "static": false,
                                        "override": false,
                                        "optional": false,
                                        "accessibility": null,
                                        "start": 162,
                                        "end": 237
                                      }
                                    ],
                                    "start": 140,
                                    "end": 255
                                  },
                                  "abstract": false,
                                  "declare": false,
                                  "start": 132,
                                  "end": 255
                                }
                              ],
                              "start": 114,
                              "end": 269
                            },
                            "expression": false,
                            "start": 111,
                            "end": 269
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 100,
                          "end": 269
                        }
                      ],
                      "start": 66,
                      "end": 279
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 58,
                    "end": 279
                  }
                ],
                "start": 48,
                "end": 285
              },
              "expression": false,
              "start": 45,
              "end": 285
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 33,
            "end": 285
          }
        ],
        "start": 8,
        "end": 287
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 287
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 287
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
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 33,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 100,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Identifier",
    "value": "constructor",
    "start": 162,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 203,
    "end": 204
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  }
]
```
