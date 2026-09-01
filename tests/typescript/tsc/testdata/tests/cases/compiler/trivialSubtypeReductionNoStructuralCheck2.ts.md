__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WizardStepProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 36
                },
                "typeArguments": null,
                "start": 21,
                "end": 36
              },
              "start": 19,
              "end": 36
            },
            "start": 14,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 36
        }
      ],
      "declare": true,
      "start": 0,
      "end": 37
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Wizard",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 57
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
                "name": "steps",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 71
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
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "wizard",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 95,
                                "end": 101
                              },
                              "value": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "ThisExpression",
                                  "start": 103,
                                  "end": 107
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Wizard",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 111,
                                    "end": 117
                                  },
                                  "typeArguments": null,
                                  "start": 111,
                                  "end": 117
                                },
                                "start": 103,
                                "end": 117
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 95,
                              "end": 117
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 128,
                                "end": 133
                              },
                              "start": 125,
                              "end": 133
                            }
                          ],
                          "start": 87,
                          "end": 140
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WizardStepProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 159
                          },
                          "typeArguments": null,
                          "start": 144,
                          "end": 159
                        },
                        "start": 87,
                        "end": 159
                      },
                      "start": 80,
                      "end": 160
                    }
                  ],
                  "start": 74,
                  "end": 164
                },
                "expression": false,
                "start": 71,
                "end": 164
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 62,
              "end": 164
            }
          ],
          "start": 58,
          "end": 166
        },
        "abstract": false,
        "declare": false,
        "start": 45,
        "end": 166
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 38,
      "end": 166
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WizardStepProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 200
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "wizard",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 211
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Wizard",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 220
                  },
                  "typeArguments": null,
                  "start": 214,
                  "end": 220
                },
                "start": 212,
                "end": 220
              },
              "accessibility": null,
              "static": false,
              "start": 205,
              "end": 221
            }
          ],
          "start": 201,
          "end": 223
        },
        "declare": false,
        "start": 175,
        "end": 223
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 168,
      "end": 223
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 223
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "WizardStepProps",
    "start": 21,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 38,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Wizard",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "steps",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "wizard",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 103,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 108,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Wizard",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 128,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 141,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "WizardStepProps",
    "start": 144,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 175,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "WizardStepProps",
    "start": 185,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "wizard",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Wizard",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  }
]
```
