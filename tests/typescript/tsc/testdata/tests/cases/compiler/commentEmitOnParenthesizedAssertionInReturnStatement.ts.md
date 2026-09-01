__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
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
                "type": "Identifier",
                "decorators": [],
                "name": "client",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 27
              },
              "typeAnnotation": null,
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 36,
                      "end": 44
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 52,
                            "end": 59
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 67
                          },
                          "optional": false,
                          "computed": false,
                          "start": 52,
                          "end": 67
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 68,
                            "end": 70
                          }
                        ],
                        "optional": false,
                        "start": 52,
                        "end": 71
                      },
                      "id": null,
                      "generator": false,
                      "start": 46,
                      "end": 71
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 36,
                    "end": 71
                  }
                ],
                "start": 30,
                "end": 75
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 21,
              "end": 75
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 82
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 93
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 94,
                          "end": 98
                        }
                      ],
                      "start": 93,
                      "end": 99
                    },
                    "start": 86,
                    "end": 99
                  },
                  "start": 84,
                  "end": 99
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 179,
                                  "end": 183
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "client",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 184,
                                  "end": 190
                                },
                                "optional": false,
                                "computed": false,
                                "start": 179,
                                "end": 190
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getThing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 200,
                                "end": 208
                              },
                              "optional": false,
                              "computed": false,
                              "start": 179,
                              "end": 208
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 179,
                            "end": 210
                          },
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 214,
                            "end": 221
                          },
                          "start": 179,
                          "end": 221
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 232
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 233,
                                "end": 237
                              }
                            ],
                            "start": 232,
                            "end": 238
                          },
                          "start": 225,
                          "end": 238
                        },
                        "start": 179,
                        "end": 238
                      },
                      "start": 106,
                      "end": 245
                    }
                  ],
                  "start": 100,
                  "end": 249
                },
                "expression": false,
                "start": 82,
                "end": 249
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 79,
              "end": 249
            }
          ],
          "start": 17,
          "end": 251
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 251
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 251
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 251
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "client",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "getThing",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 49,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 52,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "''",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 94,
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
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "client",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "getThing",
    "start": 200,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 211,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 214,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 222,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 225,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  }
]
```
