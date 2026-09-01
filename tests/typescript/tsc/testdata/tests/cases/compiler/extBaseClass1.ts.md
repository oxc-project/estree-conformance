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
        "name": "M",
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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 48
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 49,
                      "end": 51
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 40,
                    "end": 52
                  }
                ],
                "start": 33,
                "end": 58
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 58
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 58
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 89,
                "end": 96
              },
              "abstract": false,
              "declare": false,
              "start": 71,
              "end": 96
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 64,
            "end": 96
          }
        ],
        "start": 12,
        "end": 98
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 111
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 133
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 144,
                "end": 151
              },
              "abstract": false,
              "declare": false,
              "start": 125,
              "end": 151
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 151
          }
        ],
        "start": 112,
        "end": 153
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 100,
      "end": 153
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 166
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 188
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 198
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 200
                },
                "optional": false,
                "computed": false,
                "start": 197,
                "end": 200
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 201,
                "end": 208
              },
              "abstract": false,
              "declare": false,
              "start": 180,
              "end": 208
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 173,
            "end": 208
          }
        ],
        "start": 167,
        "end": 210
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 155,
      "end": 210
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 210
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
    "value": "M",
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
    "value": "class",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 40,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 64,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 79,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 100,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 131,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 134,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 155,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "N",
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
    "type": "Keyword",
    "value": "export",
    "start": 173,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 186,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 189,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
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
