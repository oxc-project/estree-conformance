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
            "name": "format",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 20,
                "end": 23
              },
              "start": 18,
              "end": 23
            },
            "start": 12,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Greeter",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 45
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
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "format",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 57
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Hello, %s",
                        "raw": "\"Hello, %s\"",
                        "start": 58,
                        "end": 69
                      }
                    ],
                    "optional": false,
                    "start": 51,
                    "end": 70
                  },
                  "start": 50,
                  "end": 70
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 81
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "boss",
                              "cooked": "boss"
                            },
                            "tail": true,
                            "start": 83,
                            "end": 89
                          }
                        ],
                        "expressions": [],
                        "start": 83,
                        "end": 89
                      },
                      "start": 83,
                      "end": 89
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "employee",
                              "cooked": "employee"
                            },
                            "tail": true,
                            "start": 92,
                            "end": 102
                          }
                        ],
                        "expressions": [],
                        "start": 92,
                        "end": 102
                      },
                      "start": 92,
                      "end": 102
                    }
                  ],
                  "start": 83,
                  "end": 102
                },
                "start": 81,
                "end": 102
              },
              "value": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "employee",
                      "cooked": "employee"
                    },
                    "tail": true,
                    "start": 105,
                    "end": 115
                  }
                ],
                "expressions": [],
                "start": 105,
                "end": 115
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 50,
              "end": 116
            }
          ],
          "start": 46,
          "end": 168
        },
        "abstract": false,
        "declare": false,
        "start": 32,
        "end": 168
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 25,
      "end": 168
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 168
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
    "value": "format",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "\"Hello, %s\"",
    "start": 58,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 73,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Template",
    "value": "`boss`",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 90,
    "end": 91
  },
  {
    "type": "Template",
    "value": "`employee`",
    "start": 92,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Template",
    "value": "`employee`",
    "start": 105,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  }
]
```
