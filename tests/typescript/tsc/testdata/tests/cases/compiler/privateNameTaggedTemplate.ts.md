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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "start": 14,
              "end": 16
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 19,
              "end": 20
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 21
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "y",
              "start": 24,
              "end": 26
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 29,
                "end": 33
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              },
              "start": 29,
              "end": 40
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 24,
            "end": 41
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 48
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 57,
                          "end": 64
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 65,
                          "end": 68
                        },
                        "optional": false,
                        "computed": false,
                        "start": 57,
                        "end": 68
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 69,
                              "end": 73
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "y",
                              "start": 74,
                              "end": 76
                            },
                            "optional": false,
                            "computed": false,
                            "start": 69,
                            "end": 76
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "->>",
                                  "cooked": "->>"
                                },
                                "tail": false,
                                "start": 76,
                                "end": 82
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "<<-",
                                  "cooked": "<<-"
                                },
                                "tail": true,
                                "start": 89,
                                "end": 94
                              }
                            ],
                            "expressions": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 82,
                                  "end": 86
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "x",
                                  "start": 87,
                                  "end": 89
                                },
                                "optional": false,
                                "computed": false,
                                "start": 82,
                                "end": 89
                              }
                            ],
                            "start": 76,
                            "end": 94
                          },
                          "start": 69,
                          "end": 94
                        }
                      ],
                      "optional": false,
                      "start": 57,
                      "end": 95
                    },
                    "directive": null,
                    "start": 57,
                    "end": 96
                  }
                ],
                "start": 51,
                "end": 100
              },
              "expression": false,
              "start": 48,
              "end": 100
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 44,
            "end": 100
          }
        ],
        "start": 10,
        "end": 102
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "PrivateIdentifier",
    "value": "y",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Null",
    "value": "null",
    "start": 29,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 34,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
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
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "PrivateIdentifier",
    "value": "y",
    "start": 74,
    "end": 76
  },
  {
    "type": "Template",
    "value": "`->>${",
    "start": 76,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 87,
    "end": 89
  },
  {
    "type": "Template",
    "value": "}<<-`",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  }
]
```
