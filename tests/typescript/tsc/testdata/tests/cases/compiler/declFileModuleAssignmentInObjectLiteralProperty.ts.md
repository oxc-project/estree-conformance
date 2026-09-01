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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 34,
                "end": 41
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 41
          }
        ],
        "start": 13,
        "end": 43
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 60
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 65
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 69
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 64,
                      "end": 69
                    }
                  ],
                  "start": 62,
                  "end": 71
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 58,
                "end": 71
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 79
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 84
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 88
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 89,
                          "end": 90
                        },
                        "optional": false,
                        "computed": false,
                        "start": 86,
                        "end": 90
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 83,
                      "end": 90
                    }
                  ],
                  "start": 81,
                  "end": 92
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 77,
                "end": 92
              }
            ],
            "start": 52,
            "end": 95
          },
          "definite": false,
          "start": 48,
          "end": 95
        }
      ],
      "declare": false,
      "start": 44,
      "end": 96
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 96
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
    "value": "m1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "m1",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  }
]
```
