__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 20
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 24,
                    "end": 30
                  },
                  "start": 22,
                  "end": 30
                },
                "start": 21,
                "end": 30
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "'hi'",
                              "start": 46,
                              "end": 50
                            },
                            "start": 46,
                            "end": 50
                          },
                          "start": 44,
                          "end": 50
                        },
                        "start": 43,
                        "end": 50
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      },
                      "start": 52,
                      "end": 61
                    },
                    "start": 42,
                    "end": 61
                  },
                  "start": 40,
                  "end": 61
                },
                "start": 32,
                "end": 61
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 18,
            "end": 63
          }
        ],
        "start": 12,
        "end": 65
      },
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 74
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
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "typeArguments": null,
          "start": 86,
          "end": 87
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 96
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
                      "start": 100,
                      "end": 106
                    },
                    "start": 98,
                    "end": 106
                  },
                  "start": 97,
                  "end": 106
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "hi",
                                "raw": "'hi'",
                                "start": 122,
                                "end": 126
                              },
                              "start": 122,
                              "end": 126
                            },
                            "start": 120,
                            "end": 126
                          },
                          "start": 119,
                          "end": 126
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 131,
                          "end": 137
                        },
                        "start": 128,
                        "end": 137
                      },
                      "start": 118,
                      "end": 137
                    },
                    "start": 116,
                    "end": 137
                  },
                  "start": 108,
                  "end": 137
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 139,
                "end": 155
              },
              "expression": false,
              "start": 96,
              "end": 155
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 94,
            "end": 155
          }
        ],
        "start": 88,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 67,
      "end": 157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 157
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 32,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 52,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 75,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Identifier",
    "value": "x1",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 108,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  }
]
```
