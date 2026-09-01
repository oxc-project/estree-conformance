__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            },
            "start": 27,
            "end": 32
          },
          "start": 21,
          "end": 32
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 47,
              "end": 53
            },
            "start": 45,
            "end": 53
          },
          "start": 34,
          "end": 53
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 56,
          "end": 60
        },
        "start": 54,
        "end": 60
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": null,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 94
                  },
                  "start": 90,
                  "end": 94
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 99
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 90,
              "end": 100
            }
          ],
          "start": 84,
          "end": 102
        },
        "abstract": false,
        "declare": false,
        "start": 78,
        "end": 102
      },
      "exportKind": "value",
      "start": 63,
      "end": 102
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 102
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 17,
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
    "value": "target",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "propertyKey",
    "start": 34,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 63,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 70,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
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
