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
        "name": "outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Beta",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 28,
            "end": 46
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 64
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Beta",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 142
                    },
                    "typeParameters": null,
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "outer",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 156
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Beta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 161
                          },
                          "optional": false,
                          "computed": false,
                          "start": 151,
                          "end": 161
                        },
                        "typeArguments": null,
                        "start": 151,
                        "end": 161
                      }
                    ],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 162,
                      "end": 165
                    },
                    "declare": false,
                    "start": 128,
                    "end": 165
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 121,
                  "end": 165
                }
              ],
              "start": 65,
              "end": 169
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 49,
            "end": 169
          }
        ],
        "start": 24,
        "end": 171
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 171
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 171
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 28,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Beta",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 49,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 59,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 128,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Beta",
    "start": 138,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 143,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Beta",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  }
]
```
