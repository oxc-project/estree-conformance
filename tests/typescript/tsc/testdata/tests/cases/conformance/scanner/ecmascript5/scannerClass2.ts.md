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
          "name": "LoggerAdapter",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 30
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILogger",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 49
            },
            "typeArguments": null,
            "start": 42,
            "end": 49
          }
        ],
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
                "start": 60,
                "end": 71
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
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "logger",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ILogger",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 88,
                            "end": 95
                          },
                          "typeArguments": null,
                          "start": 88,
                          "end": 95
                        },
                        "start": 86,
                        "end": 95
                      },
                      "start": 80,
                      "end": 95
                    },
                    "readonly": false,
                    "static": false,
                    "start": 73,
                    "end": 95
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
                            "start": 112,
                            "end": 116
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_information",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 117,
                            "end": 129
                          },
                          "optional": false,
                          "computed": false,
                          "start": 112,
                          "end": 129
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 132,
                                "end": 136
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "logger",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 137,
                                "end": 143
                              },
                              "optional": false,
                              "computed": false,
                              "start": 132,
                              "end": 143
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "information",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 155
                            },
                            "optional": false,
                            "computed": false,
                            "start": 132,
                            "end": 155
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 132,
                          "end": 157
                        },
                        "start": 112,
                        "end": 157
                      },
                      "directive": null,
                      "start": 112,
                      "end": 158
                    }
                  ],
                  "start": 97,
                  "end": 168
                },
                "expression": false,
                "start": 72,
                "end": 168
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 60,
              "end": 168
            }
          ],
          "start": 50,
          "end": 174
        },
        "abstract": false,
        "declare": false,
        "start": 11,
        "end": 174
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 174
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 174
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 4,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 11,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "LoggerAdapter",
    "start": 17,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 31,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "ILogger",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 60,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 73,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "ILogger",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "_information",
    "start": 117,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "information",
    "start": 144,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  }
]
```
