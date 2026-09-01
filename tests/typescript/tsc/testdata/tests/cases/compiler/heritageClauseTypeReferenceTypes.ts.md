__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "valueA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 37
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 40,
                    "end": 41
                  },
                  "definite": false,
                  "start": 31,
                  "end": 41
                }
              ],
              "declare": false,
              "start": 25,
              "end": 42
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 42
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "valueB",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 96
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 99,
                            "end": 100
                          },
                          "definite": false,
                          "start": 90,
                          "end": 100
                        }
                      ],
                      "declare": false,
                      "start": 84,
                      "end": 101
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 77,
                    "end": 101
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 129
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 130,
                        "end": 132
                      },
                      "declare": false,
                      "start": 118,
                      "end": 132
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 111,
                    "end": 132
                  }
                ],
                "start": 67,
                "end": 138
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 55,
              "end": 138
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 48,
            "end": 138
          }
        ],
        "start": 12,
        "end": 140
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 140
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 149
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "optional": false,
              "computed": false,
              "start": 161,
              "end": 164
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "optional": false,
            "computed": false,
            "start": 161,
            "end": 166
          },
          "typeArguments": null,
          "start": 161,
          "end": 166
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 167,
        "end": 169
      },
      "abstract": false,
      "declare": false,
      "start": 142,
      "end": 169
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "valueA",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 48,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 55,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "valueB",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 111,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 118,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
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
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 150,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  }
]
```
