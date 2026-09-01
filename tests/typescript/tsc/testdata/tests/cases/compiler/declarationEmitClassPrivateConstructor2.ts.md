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
        "name": "PrivateInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 26
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 27,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedClass1",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 59
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
                "start": 74,
                "end": 85
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
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PrivateInterface",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 99,
                            "end": 115
                          },
                          "typeArguments": null,
                          "start": 99,
                          "end": 115
                        },
                        "start": 97,
                        "end": 115
                      },
                      "start": 93,
                      "end": 115
                    },
                    "readonly": false,
                    "static": false,
                    "start": 86,
                    "end": 115
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 117,
                  "end": 120
                },
                "expression": false,
                "start": 85,
                "end": 120
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 66,
              "end": 120
            }
          ],
          "start": 60,
          "end": 122
        },
        "abstract": false,
        "declare": false,
        "start": 39,
        "end": 122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 122
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedClass2",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 152
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
                "start": 169,
                "end": 180
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
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PrivateInterface",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 203
                        },
                        "typeArguments": null,
                        "start": 187,
                        "end": 203
                      },
                      "start": 185,
                      "end": 203
                    },
                    "start": 181,
                    "end": 203
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 205,
                  "end": 208
                },
                "expression": false,
                "start": 180,
                "end": 208
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "protected",
              "start": 159,
              "end": 208
            }
          ],
          "start": 153,
          "end": 210
        },
        "abstract": false,
        "declare": false,
        "start": 132,
        "end": 210
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 125,
      "end": 210
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 210
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
    "value": "PrivateInterface",
    "start": 10,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "ExportedClass1",
    "start": 45,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 66,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 74,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 86,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "PrivateInterface",
    "start": 99,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "ExportedClass2",
    "start": 138,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 159,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 169,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "PrivateInterface",
    "start": 187,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
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
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  }
]
```
